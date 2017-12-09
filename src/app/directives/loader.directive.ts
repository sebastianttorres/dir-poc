import { Directive, OnInit, HostBinding, ViewContainerRef, ComponentFactoryResolver, AfterContentInit, Input } from '@angular/core';
import { LoaderComponent } from '../components/loader/loader.component';

@Directive({
  selector: '[appLoader]'
})
export class LoaderDirective implements AfterContentInit {

  constructor(private ref: ViewContainerRef, private compiler: ComponentFactoryResolver) { }

  @HostBinding('style.display') display: string;

  @Input('appLoader') set appLoader(value: string) {
    if (value === 'loading') {
      this.display = 'none';
      this.createComponent();
    }
    if (value === 'visible') {
      this.display = '';
      this.ref.clear();
    }
    if (value === 'invisible') {
      this.display = 'none';
      this.ref.clear();
    }
  }

  createComponent() {
    if (this.ref.length === 0) { this.ref.createComponent(this.compiler.resolveComponentFactory(LoaderComponent)); }
  }

  ngAfterContentInit() {
    this.display = 'none';
    this.createComponent();
  }
}

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
      this.createComponent();
      this.display = 'none';
    }
    if (value === 'visible') {
      this.ref.clear();
      this.display = '';
    }
    if (value === 'invisible') {
      this.ref.clear();
      this.display = 'none';
    }
  }

  createComponent() {
    if (this.ref.length === 0) { this.ref.createComponent(this.compiler.resolveComponentFactory(LoaderComponent)); }
  }

  ngAfterContentInit() {
    this.createComponent();
    this.display = 'none';
  }
}

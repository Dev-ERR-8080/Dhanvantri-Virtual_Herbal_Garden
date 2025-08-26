import { Component, HostListener, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Perform any initialization here if needed
  }

  // Listen for window scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const featureElement = this.el.nativeElement.querySelector('.feature');
    
    if (featureElement) {
      const elementPosition = featureElement.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (elementPosition <= viewportHeight && elementPosition >= 0) {
        // Add the 'glow' class when the element is in view
        this.renderer.addClass(featureElement, 'glow');

        // Remove the glow class after 2 seconds
        setTimeout(() => {
          this.renderer.removeClass(featureElement, 'glow');
        }, 1500); // 2000 milliseconds = 2 seconds
      }
    }
  }
}

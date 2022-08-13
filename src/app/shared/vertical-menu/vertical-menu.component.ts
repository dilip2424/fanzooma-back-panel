import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef,
  HostListener,
} from '@angular/core';
import { ROUTES } from './vertical-menu-routes.config';
import { HROUTES } from '../horizontal-menu/navigation-routes.config';

import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { customAnimations } from '../animations/custom-animations';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ConfigService } from '../services/config.service';
import { Subscription } from 'rxjs';
import { LayoutService } from '../services/layout.service';
import { AuthService } from 'app/core/service/auth/auth.service';
import { ContactUsService } from 'app/modules/contact-us/_services/contact-us.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './vertical-menu.component.html',
  animations: customAnimations,
})
export class VerticalMenuComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('toggleIcon') toggleIcon: ElementRef;
  public menuItems: any[];
  level: number = 0;
  logoUrl = 'assets/mindset/logo.png';
  public config: any = {};
  protected innerWidth: any;
  layoutSub: Subscription;
  configSub: Subscription;
  perfectScrollbarEnable = true;
  collapseSidebar = false;
  resizeTimeout;
  type: any;

  contactUsCount = 0;
  inquiryCount = 0;

  constructor(
    private router: Router,
    public translate: TranslateService,
    private layoutService: LayoutService,
    private configService: ConfigService,
    private cdr: ChangeDetectorRef,
    private deviceService: DeviceDetectorService,
    private authservice: AuthService,
    private contactUsService: ContactUsService
  ) {
    this.config = this.configService.templateConf;
    this.innerWidth = window.innerWidth;
    this.isTouchDevice();
  }

  // insertBadge(title, count) {
  //   const mergedCount = this.contactUsCount + this.inquiryCount;
  //   for (let config of this.menuItems) {
  //     if (config.title === 'Communication') {
  //       for (let submenu of config.submenu) {
  //         if (submenu.title == title) {
  //           submenu.badge = count;
  //           config.badge = mergedCount;

  //           submenu.badgeClass = 'badge badge-pill badge-danger float-right mr-1 mt-1';
  //           config.badgeClass = 'badge badge-pill badge-danger float-right mr-1 mt-1';
  //           break;
  //         }
  //       }
  //       break;
  //     }
  //   }
  // }

  ngOnInit() {
    this.authservice.currentUser$.subscribe((user) => {
      this.type = this.authservice.currentUserValue.role;
      this.menuItems = ROUTES;

      // if (this.authservice.isAdminCategory()) {
      //   this.menuItems = this.menuItems.filter(m => {
      //     return m.title != "Contact Us";
      //   })
      //   for (let config of this.menuItems) {
      //     if (config.title === 'Communication') {
      //       config.badge = "";
      //       break;
      //     }
      //   }

      //   this.contactUsService.getBadgeCount();
      //   this.contactUsService.badgeCount$.subscribe((count) => {
      //     this.contactUsCount = count;
      //     this.insertBadge('Contact Us', count);
      //     this.cdr.markForCheck();
      //   })

      //   this.inquiryService.getBadgeCount();
      //   this.inquiryService.badgeCount$.subscribe((count) => {
      //     this.inquiryCount = count;
      //     this.insertBadge('Inquiry List', count)
      //     this.cdr.markForCheck();
      //   })
      // } else {
      //   this.menuItems = this.menuItems.filter(m => {
      //     return m.title != "Communication";
      //   })
      // }
      this.cdr.markForCheck();
    });
  }

  ngAfterViewInit() {
    this.configSub = this.configService.templateConf$.subscribe(
      (templateConf) => {
        if (templateConf) {
          this.config = templateConf;
        }
        this.loadLayout();
        this.cdr.markForCheck();
      }
    );

    this.layoutSub = this.layoutService.overlaySidebarToggle$.subscribe(
      (collapse) => {
        if (this.config.layout.menuPosition === 'Side') {
          this.collapseSidebar = collapse;
        }
      }
    );
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    this.resizeTimeout = setTimeout(
      (() => {
        this.innerWidth = event.target.innerWidth;
        this.loadLayout();
      }).bind(this),
      500
    );
  }

  loadLayout() {
    if (this.config.layout.menuPosition === 'Top') {
      // Horizontal Menu
      if (this.innerWidth < 1200) {
        // Screen size < 1200
        this.menuItems = HROUTES;
      }
    } else if (this.config.layout.menuPosition === 'Side') {
      // Vertical Menu{
      this.menuItems = ROUTES;
    }

    if (this.config.layout.sidebar.backgroundColor === 'white') {
      this.logoUrl = 'assets/img/logo-dark.png';
    } else {
      this.logoUrl = 'assets/mindset/logo.png';
    }

    if (this.config.layout.sidebar.collapsed) {
      this.collapseSidebar = true;
    } else {
      this.collapseSidebar = false;
    }
  }

  toggleSidebar() {
    let conf = this.config;
    conf.layout.sidebar.collapsed = !this.config.layout.sidebar.collapsed;
    this.configService.applyTemplateConfigChange({ layout: conf.layout });

    setTimeout(() => {
      this.fireRefreshEventOnWindow();
    }, 300);
  }

  fireRefreshEventOnWindow = function () {
    const evt = document.createEvent('HTMLEvents');
    evt.initEvent('resize', true, false);
    window.dispatchEvent(evt);
  };

  CloseSidebar() {
    this.layoutService.toggleSidebarSmallScreen(false);
  }

  isTouchDevice() {
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();

    if (isMobile || isTablet) {
      this.perfectScrollbarEnable = false;
    } else {
      this.perfectScrollbarEnable = true;
    }
  }

  ngOnDestroy() {
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
    if (this.configSub) {
      this.configSub.unsubscribe();
    }
  }
}

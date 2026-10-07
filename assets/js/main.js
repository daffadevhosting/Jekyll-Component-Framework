/**
 * Thicket UI - Main Entry
 */

import { initTheme } from './components/theme.js';
import { initNavbar } from './components/navbar.js';
import { initAccordion } from './components/accordion.js';
import { initTabs } from './components/tabs.js';
import { initModal } from './components/modal.js';
import { initOffcanvas } from './components/offcanvas.js';
import { initDropdown } from './components/dropdown.js';
import { initTooltip } from './components/tooltip.js';
import { initToast } from './components/toast.js';
import { initCode } from './components/code.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initAccordion();
  initTabs();
  initModal();
  initOffcanvas();
  initDropdown();
  initTooltip();
  initToast();
  initCode();
});

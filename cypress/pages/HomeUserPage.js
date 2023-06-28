/// <reference types="Cypress" />
require("cypress-xpath");

class HomeUserPage {
  clickearEnMenuDesplegable() {
    cy.get(
      '[style="float: left; width: 30px; height: 30px; padding-top: 3px;"] > .caret'
    ).trigger("mouseover");
  }

  clickearEnMisDispositivos() {
    cy.get(
      "div.wrap:nth-child(1) div.navMenu--global div.row div.hidden-xs.navMenu--user ul.nav_user.nav.navbar-nav.navbar-right.menuvisible.menu-anonymous.menu_user-top-margin.menu_user-on-hover.add-border.custom-top li.dropdown.nav-logged-user-li ul.dropdown-menu.menu-user:nth-child(3) li:nth-child(3) > a:nth-child(1)"
    ).click();
  }
}

export default HomeUserPage;

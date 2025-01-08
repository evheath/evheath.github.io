import { Component } from "@angular/core";
import {
  frontendTechs,
  toolbeltTechs,
  backendTechs,
  databases,
  languages,
  platforms,
  stylingTechs,
} from "./technologies";
import { deviconInterface } from "./devicon.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public frontendTechs = frontendTechs;
  public backendTechs = backendTechs;
  public toolbeltTechs = toolbeltTechs;
  public databases = databases;
  public languages = languages;
  public platforms = platforms;
  public stylingTechs = stylingTechs;

  public showNavBar: boolean = false;
  public toggleNavBar() {
    this.showNavBar = !this.showNavBar;
  }
  public closeNavBar() {
    this.showNavBar = false;
  }

  public isHovering(icon: deviconInterface): boolean {
    return icon.hovering;
  }
  public isClicked(icon: deviconInterface): boolean {
    return icon.clicked;
  }

  public enter(icon: deviconInterface): void {
    icon.hovering = true;
  }

  public leave(icon: deviconInterface): void {
    icon.hovering = false;
  }

  public clicked(icon: deviconInterface): void {
    icon.clicked = !icon.clicked;
  }
}

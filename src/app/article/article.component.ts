import { Component } from "@angular/core";

@Component ({
selector: "app-article",
templateUrl: "./article.component.html",

})

export class ArticleComponent {
  title:string = "The Title!";
  content:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim diam vulputate ut pharetra sit amet aliquam id. Duis ultricies lacus sed turpis tincidunt id. Netus et malesuada fames ac turpis. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Aliquet enim tortor at auctor urna nunc id cursus. Quisque egestas diam in arcu cursus euismod quis viverra. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Egestas fringilla phasellus faucibus scelerisque. Viverra adipiscing at in tellus. Aliquet porttitor lacus luctus accumsan tortor. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Condimentum mattis pellentesque id nibh tortor id. Sem integer vitae justo eget magna fermentum iaculis eu non. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit."
  isTechRelated:boolean = true;
  changeIsTechRelated() {
    this.isTechRelated = !this.isTechRelated
  }
}

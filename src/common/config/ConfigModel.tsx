export class ConfigModel {
  postsUrl: string = '';
  basicUrl: string = '';
  constructor(postsUrl: string, basicUrl: string) {
    this.postsUrl = postsUrl;
    this.basicUrl = basicUrl;
  }
}

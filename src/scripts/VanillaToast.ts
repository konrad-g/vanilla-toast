enum TypeToast {
  INFO,
  WARNING,
  ERROR
}

class VanillaToast {

  private static FADE_MS = 400;
  private REMOVE_TIME_MS = 2000;

  private parent: any;
  private duration;

  constructor(parent: any) {
    this.parent = parent;
    this.duration = this.REMOVE_TIME_MS;
  }

  public showSuccess(title: string, message: string) {
    let text: string = this.getCustomToast(title, message, "success");
    let toast: any = this.addToast(text);
  }

  public showInfo(title: string, message: string) {
    let text: string = this.getCustomToast(title, message, "info");
    let toast: any = this.addToast(text);
  }

  public showWarning(title: string, message: string) {
    let text: string = this.getCustomToast(title, message, "warning");
    let toast: any = this.addToast(text);
  }

  public showError(title: string, message: string) {
    let text: string = this.getCustomToast(title, message, "error");
    let toast: any = this.addToast(text);
  }

  public showPlain(title: string, message: string) {
      let text: string = this.getCustomToast(title, message, "plain");
      let toast: any = this.addToast(text);
  }

  public showCustom(title: string, message: string, iconUrl: string) {
    // TODO: Add
      let text: string = this.getCustomToast(title, message, "error");
      let toast: any = this.addToast(text);
  }

  private getCustomToast(title: string, message: string, type: string): string {

    if (!title) title = " ";
    if (!message) message = " ";

    let text: string =
      '<div class="dj-toast"><div class="dj-toast-icon-' + type + '"></div>' +
      '<div class="dj-toast-text"><div class="dj-toast-title">' +
      title + '</div><div class="dj-toast-message">' +
      message + '</div></div></div>';
    return text;
  }

  private addToast(toastHtml: string): any {

    let self = this;

    let container: any = $(this.getContainer());
    let toast: any = $(toastHtml);
    toast.hide();
    toast.appendTo(container);

    // Add close button
    let closeBtn: any = $('<div class="dj-toast-icon-close"></div>');
    closeBtn.appendTo(toast);

    closeBtn.on("pointerdown", function () {
      self.removeToast(toast)
    });
    setTimeout(function () {
      self.removeToast(toast)
    }, self.duration);

    toast.fadeIn(VanillaToast.FADE_MS);

    return toast;
  }

  private getContainer(): any {

    if (this.parent.getElementsByClassName("dj-toast-container").length == 0) {
      // Container doesn't exist
      this.parent.insertAdjacentHTML("afterbegin", "<div class=\"dj-toast-container\"></div>");
    }

    return this.parent.getElementsByClassName("dj-toast-container")[0];
  }

  private removeToast(toast: any) {

    toast.fadeOut(VanillaToast.FADE_MS, function () {
        toast.remove();
      }
    );
  }
}

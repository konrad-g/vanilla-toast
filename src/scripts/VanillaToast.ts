enum ToastType {
  SUCCESS = "success",
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
  PLAIN = "plain",
  CUSTOM = "custom"
}

enum ToastPosition {
  TOP_RIGHT = "top-right",
  TOP_LEFT = "top-left",
  BOTTOM_RIGHT = "bottom-right",
  BOTTOM_LEFT = "bottom-left"
}

class VanillaToast {

  private static FADE_MS = 400;
  private REMOVE_TIME_MS = 3000;
  private REMOVE_TIME_MIN_MS = 300;

  private parent: any;
  private containerTopLeft: any;
  private containerTopRight: any;
  private containerBottomLeft: any;
  private containerBottomRight: any;

  constructor(parent: any) {
    this.parent = parent;
  }

  public showSuccess(title: string, message: string, position: ToastPosition = ToastPosition.BOTTOM_LEFT, duration = this.REMOVE_TIME_MS): HTMLElement {
    let text: HTMLElement = this.getCustomToast(title, message, ToastType.SUCCESS);
    let toast: HTMLElement = this.addToast(text, position, duration);
    return toast;
  }

  public showInfo(title: string, message: string, position: ToastPosition = ToastPosition.BOTTOM_LEFT, duration = this.REMOVE_TIME_MS): HTMLElement {
    let text: HTMLElement = this.getCustomToast(title, message, ToastType.INFO);
    let toast: HTMLElement = this.addToast(text, position, duration);
    return toast;
  }

  public showWarning(title: string, message: string, position: ToastPosition = ToastPosition.BOTTOM_LEFT, duration = this.REMOVE_TIME_MS): HTMLElement {
    let text: HTMLElement = this.getCustomToast(title, message, ToastType.WARNING);
    let toast: HTMLElement = this.addToast(text, position, duration);
    return toast;
  }

  public showError(title: string, message: string, position: ToastPosition = ToastPosition.BOTTOM_LEFT, duration = this.REMOVE_TIME_MS): HTMLElement {
    let text: HTMLElement = this.getCustomToast(title, message, ToastType.ERROR);
    let toast: HTMLElement = this.addToast(text, position, duration);
    return toast;
  }

  public showPlain(title: string, message: string, position: ToastPosition = ToastPosition.BOTTOM_LEFT, duration = this.REMOVE_TIME_MS): HTMLElement {
    let text: HTMLElement = this.getCustomToast(title, message, ToastType.PLAIN);
    let toast: HTMLElement = this.addToast(text, position, duration);
    return toast;
  }

  public showCustom(title: string, message: string, iconUrl: string, position: ToastPosition = ToastPosition.BOTTOM_LEFT, duration = this.REMOVE_TIME_MS): HTMLElement {
    let text: HTMLElement = this.getCustomToast(title, message, ToastType.CUSTOM, iconUrl);
    let toast: HTMLElement = this.addToast(text, position, duration);
    return toast;
  }

  private getCustomToast(title: string, message: string, type: ToastType, iconUrl?: string): HTMLElement {

    if (!title) title = " ";
    if (!message) message = " ";

    let icon = '<div class="dj-toast-icon"></div>';
    if (type == ToastType.CUSTOM) {
      icon = '<div class="dj-toast-icon" style="background-image: url(' + iconUrl + ');"></div>';
    }

    let toast: any = document.createElement("div");
    toast.className = "dj-toast dj-toast-" + type;
    toast.style.display = "none";
    toast.insertAdjacentHTML("afterbegin",
      icon +
      '<div class="dj-toast-text">' +
      '<div class="dj-toast-title">' + title + '</div>' +
      '<div class="dj-toast-message">' + message + '</div></div>'
    );

    toast.fade = (type: string, ms: number, onEnd?: () => void) => {
      let self: any = toast;

      let isIn = type === 'in',
        opacity = isIn ? 0 : 1,
        interval = 10,
        duration = ms,
        gap = interval / duration;

      if (isIn) {
        self.style.display = 'block';
        self.style.opacity = opacity;
      }

      function func() {
        opacity = isIn ? opacity + gap : opacity - gap;
        self.style.opacity = opacity;

        if (opacity <= 0) self.style.display = 'none'
        if (opacity <= 0 || opacity >= 1) {
          window.clearInterval(fading);
          if (onEnd != null) onEnd();
        }
      }

      let fading = window.setInterval(func, interval);
    };

    toast.fadeIn = (ms: number, onEnd?: () => void) => {
      toast.fade("in", ms, onEnd);
    };

    toast.fadeOut = (ms: number, onEnd?: () => void) => {
      toast.fade("out", ms, onEnd);
    };

    return toast;
  }

  private addToast(toast: any, position: ToastPosition, duration: number = 0): HTMLElement {

    let self = this;

    if (duration <= self.REMOVE_TIME_MIN_MS) {
      duration = self.REMOVE_TIME_MIN_MS;
    }

    let container: any = this.getContainer(position);
    container.appendChild(toast);

    // Add close button
    let closeBtn: HTMLElement = document.createElement("div");
    closeBtn.className = "dj-toast-icon-close";
    toast.appendChild(closeBtn);

    closeBtn.addEventListener("pointerdown", function () {
      self.removeToast(toast);
    });

    setTimeout(function () {
      self.removeToast(toast)
    }, duration);

    toast.fadeIn(VanillaToast.FADE_MS);

    return toast;
  }

  private getContainer(position: ToastPosition): any {

    if (position == ToastPosition.TOP_LEFT && !this.containerTopLeft) {
      this.containerTopLeft = this.createContainer(position);
    } else if (position == ToastPosition.TOP_RIGHT && !this.containerTopRight) {
      this.containerTopRight = this.createContainer(position);
    } else if (position == ToastPosition.BOTTOM_LEFT && !this.containerBottomLeft) {
      this.containerBottomLeft = this.createContainer(position);
    } else if (position == ToastPosition.BOTTOM_RIGHT && !this.containerBottomRight) {
      this.containerBottomRight = this.createContainer(position);
    }

    if (position == ToastPosition.TOP_LEFT) {
      return this.containerTopLeft;
    } else if (position == ToastPosition.TOP_RIGHT) {
      return this.containerTopRight;
    } else if (position == ToastPosition.BOTTOM_LEFT) {
      return this.containerBottomLeft;
    } else if (position == ToastPosition.BOTTOM_RIGHT) {
      return this.containerBottomRight;
    }

    return this.containerBottomLeft;
  }

  private createContainer(position: ToastPosition): any {
    let container = document.createElement("div");
    container.className = "dj-toast-container-" + position;
    this.parent.appendChild(container);
    return container;
  }

  private removeToast(toast: any) {

    toast.fadeOut(VanillaToast.FADE_MS, function () {
        toast.remove();
      }
    );
  }
}

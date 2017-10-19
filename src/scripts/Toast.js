var TypeToast;
(function (TypeToast) {
    TypeToast[TypeToast["INFO"] = 0] = "INFO";
    TypeToast[TypeToast["WARNING"] = 1] = "WARNING";
    TypeToast[TypeToast["ERROR"] = 2] = "ERROR";
})(TypeToast || (TypeToast = {}));
var Toast = (function () {
    function Toast(parent) {
        this.REMOVE_TIME_MS = 2000;
        this.parent = parent;
        this.duration = this.REMOVE_TIME_MS;
    }
    Toast.prototype.showSuccess = function (title, message) {
        var text = this.getCustomToast(title, message, "success");
        var toast = this.addToast(text);
    };
    Toast.prototype.showInfo = function (title, message) {
        var text = this.getCustomToast(title, message, "info");
        var toast = this.addToast(text);
    };
    Toast.prototype.showWarning = function (title, message) {
        var text = this.getCustomToast(title, message, "warning");
        var toast = this.addToast(text);
    };
    Toast.prototype.showError = function (title, message) {
        var text = this.getCustomToast(title, message, "error");
        var toast = this.addToast(text);
    };
    Toast.prototype.getCustomToast = function (title, message, type) {
        if (!title)
            title = " ";
        if (!message)
            message = " ";
        var text = '<div class="dj-toast"><div class="dj-toast-icon-' + type + '"></div>' +
            '<div class="dj-toast-text"><div class="dj-toast-title">' +
            title + '</div><div class="dj-toast-message">' +
            message + '</div></div></div>';
        return text;
    };
    Toast.prototype.addToast = function (toastHtml) {
        var self = this;
        var container = this.getContainer();
        var toast = $(toastHtml);
        toast.hide();
        toast.appendTo(container);
        var closeBtn = $('<div class="dj-toast-icon-close"></div>');
        closeBtn.appendTo(toast);
        closeBtn.on("pointerdown", function () {
            self.removeToast(toast);
        });
        setTimeout(function () {
            self.removeToast(toast);
        }, self.duration);
        toast.fadeIn(Toast.FADE_MS);
        return toast;
    };
    Toast.prototype.getContainer = function () {
        if ($(".dj-toast-container").length == 0) {
            this.parent.append("<div class=\"dj-toast-container\"></div>");
        }
        return $(".dj-toast-container");
    };
    Toast.prototype.removeToast = function (toast) {
        toast.fadeOut(Toast.FADE_MS, function () {
            toast.remove();
        });
    };
    Toast.FADE_MS = 400;
    return Toast;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RvYXN0L1RvYXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLElBQUssU0FJSjtBQUpELFdBQUssU0FBUztJQUNaLHlDQUFJLENBQUE7SUFDSiwrQ0FBTyxDQUFBO0lBQ1AsMkNBQUssQ0FBQTtBQUNQLENBQUMsRUFKSSxTQUFTLEtBQVQsU0FBUyxRQUliO0FBRUQ7SUFVRSxlQUFZLE1BQVc7UUFMZixtQkFBYyxHQUFHLElBQUksQ0FBQztRQU01QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDdEMsQ0FBQztJQUVNLDJCQUFXLEdBQWxCLFVBQW1CLEtBQWEsRUFBRSxPQUFlO1FBQy9DLElBQUksSUFBSSxHQUFXLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNsRSxJQUFJLEtBQUssR0FBUSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSx3QkFBUSxHQUFmLFVBQWdCLEtBQWEsRUFBRSxPQUFlO1FBQzVDLElBQUksSUFBSSxHQUFXLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvRCxJQUFJLEtBQUssR0FBUSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSwyQkFBVyxHQUFsQixVQUFtQixLQUFhLEVBQUUsT0FBZTtRQUMvQyxJQUFJLElBQUksR0FBVyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDbEUsSUFBSSxLQUFLLEdBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0seUJBQVMsR0FBaEIsVUFBaUIsS0FBYSxFQUFFLE9BQWU7UUFDN0MsSUFBSSxJQUFJLEdBQVcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hFLElBQUksS0FBSyxHQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVPLDhCQUFjLEdBQXRCLFVBQXVCLEtBQWEsRUFBRSxPQUFlLEVBQUUsSUFBWTtRQUVqRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDeEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBRTVCLElBQUksSUFBSSxHQUNOLGtEQUFrRCxHQUFHLElBQUksR0FBRyxVQUFVO1lBQ3RFLHlEQUF5RDtZQUN6RCxLQUFLLEdBQUcsc0NBQXNDO1lBQzlDLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQztRQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLHdCQUFRLEdBQWhCLFVBQWlCLFNBQWlCO1FBRWhDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLFNBQVMsR0FBUSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekMsSUFBSSxLQUFLLEdBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNiLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFHMUIsSUFBSSxRQUFRLEdBQVEsQ0FBQyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDakUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV6QixRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRTtZQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDO1lBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN6QixDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWxCLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTVCLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU8sNEJBQVksR0FBcEI7UUFFRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV6QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7UUFFRCxNQUFNLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVPLDJCQUFXLEdBQW5CLFVBQW9CLEtBQVU7UUFFNUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ3pCLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqQixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFyRmMsYUFBTyxHQUFHLEdBQUcsQ0FBQztJQXNGL0IsWUFBQztDQTFGRCxBQTBGQyxJQUFBIiwiZmlsZSI6ImVsZW1lbnRzL3RvYXN0L1RvYXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2luZGV4LmQudHNcIiAvPlxuXG5lbnVtIFR5cGVUb2FzdCB7XG4gIElORk8sXG4gIFdBUk5JTkcsXG4gIEVSUk9SXG59XG5cbmNsYXNzIFRvYXN0IHtcblxuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogVG9hc3Q7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgRkFERV9NUyA9IDQwMDtcbiAgcHJpdmF0ZSBSRU1PVkVfVElNRV9NUyA9IDIwMDA7XG5cbiAgcHJpdmF0ZSBwYXJlbnQ6IGFueTtcbiAgcHJpdmF0ZSBkdXJhdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwYXJlbnQ6IGFueSkge1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuZHVyYXRpb24gPSB0aGlzLlJFTU9WRV9USU1FX01TO1xuICB9XG5cbiAgcHVibGljIHNob3dTdWNjZXNzKHRpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGxldCB0ZXh0OiBzdHJpbmcgPSB0aGlzLmdldEN1c3RvbVRvYXN0KHRpdGxlLCBtZXNzYWdlLCBcInN1Y2Nlc3NcIik7XG4gICAgbGV0IHRvYXN0OiBhbnkgPSB0aGlzLmFkZFRvYXN0KHRleHQpO1xuICB9XG5cbiAgcHVibGljIHNob3dJbmZvKHRpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGxldCB0ZXh0OiBzdHJpbmcgPSB0aGlzLmdldEN1c3RvbVRvYXN0KHRpdGxlLCBtZXNzYWdlLCBcImluZm9cIik7XG4gICAgbGV0IHRvYXN0OiBhbnkgPSB0aGlzLmFkZFRvYXN0KHRleHQpO1xuICB9XG5cbiAgcHVibGljIHNob3dXYXJuaW5nKHRpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGxldCB0ZXh0OiBzdHJpbmcgPSB0aGlzLmdldEN1c3RvbVRvYXN0KHRpdGxlLCBtZXNzYWdlLCBcIndhcm5pbmdcIik7XG4gICAgbGV0IHRvYXN0OiBhbnkgPSB0aGlzLmFkZFRvYXN0KHRleHQpO1xuICB9XG5cbiAgcHVibGljIHNob3dFcnJvcih0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBsZXQgdGV4dDogc3RyaW5nID0gdGhpcy5nZXRDdXN0b21Ub2FzdCh0aXRsZSwgbWVzc2FnZSwgXCJlcnJvclwiKTtcbiAgICBsZXQgdG9hc3Q6IGFueSA9IHRoaXMuYWRkVG9hc3QodGV4dCk7XG4gIH1cblxuICBwcml2YXRlIGdldEN1c3RvbVRvYXN0KHRpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgdHlwZTogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgIGlmICghdGl0bGUpIHRpdGxlID0gXCIgXCI7XG4gICAgaWYgKCFtZXNzYWdlKSBtZXNzYWdlID0gXCIgXCI7XG5cbiAgICBsZXQgdGV4dDogc3RyaW5nID1cbiAgICAgICc8ZGl2IGNsYXNzPVwiZGotdG9hc3RcIj48ZGl2IGNsYXNzPVwiZGotdG9hc3QtaWNvbi0nICsgdHlwZSArICdcIj48L2Rpdj4nICtcbiAgICAgICc8ZGl2IGNsYXNzPVwiZGotdG9hc3QtdGV4dFwiPjxkaXYgY2xhc3M9XCJkai10b2FzdC10aXRsZVwiPicgK1xuICAgICAgdGl0bGUgKyAnPC9kaXY+PGRpdiBjbGFzcz1cImRqLXRvYXN0LW1lc3NhZ2VcIj4nICtcbiAgICAgIG1lc3NhZ2UgKyAnPC9kaXY+PC9kaXY+PC9kaXY+JztcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHByaXZhdGUgYWRkVG9hc3QodG9hc3RIdG1sOiBzdHJpbmcpOiBhbnkge1xuXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgbGV0IGNvbnRhaW5lcjogYW55ID0gdGhpcy5nZXRDb250YWluZXIoKTtcbiAgICBsZXQgdG9hc3Q6IGFueSA9ICQodG9hc3RIdG1sKTtcbiAgICB0b2FzdC5oaWRlKCk7XG4gICAgdG9hc3QuYXBwZW5kVG8oY29udGFpbmVyKTtcblxuICAgIC8vIEFkZCBjbG9zZSBidXR0b25cbiAgICBsZXQgY2xvc2VCdG46IGFueSA9ICQoJzxkaXYgY2xhc3M9XCJkai10b2FzdC1pY29uLWNsb3NlXCI+PC9kaXY+Jyk7XG4gICAgY2xvc2VCdG4uYXBwZW5kVG8odG9hc3QpO1xuXG4gICAgY2xvc2VCdG4ub24oXCJwb2ludGVyZG93blwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLnJlbW92ZVRvYXN0KHRvYXN0KVxuICAgIH0pO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5yZW1vdmVUb2FzdCh0b2FzdClcbiAgICB9LCBzZWxmLmR1cmF0aW9uKTtcblxuICAgIHRvYXN0LmZhZGVJbihUb2FzdC5GQURFX01TKTtcblxuICAgIHJldHVybiB0b2FzdDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29udGFpbmVyKCk6IGFueSB7XG5cbiAgICBpZiAoJChcIi5kai10b2FzdC1jb250YWluZXJcIikubGVuZ3RoID09IDApIHtcbiAgICAgIC8vIENvbnRhaW5lciBkb2Vzbid0IGV4aXN0XG4gICAgICB0aGlzLnBhcmVudC5hcHBlbmQoXCI8ZGl2IGNsYXNzPVxcXCJkai10b2FzdC1jb250YWluZXJcXFwiPjwvZGl2PlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJChcIi5kai10b2FzdC1jb250YWluZXJcIik7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVRvYXN0KHRvYXN0OiBhbnkpIHtcblxuICAgIHRvYXN0LmZhZGVPdXQoVG9hc3QuRkFERV9NUywgZnVuY3Rpb24gKCkge1xuICAgICAgICB0b2FzdC5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG59XG4iXX0=
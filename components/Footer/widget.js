window.fwSettings = {
  widget_id: 150000003011,
};
!(function () {
  if ("function" != typeof window.FreshworksWidget) {
    var n = function () {
      n.q.push(arguments);
    };
    (n.q = []), (window.FreshworksWidget = n);
  }
})();
function openWidget() {
  FreshworksWidget("open", "ticketForm");
}

window.TrelloPowerUp.initialize({
    "card-badges": function (t, opts) {
      let cardAttachments = opts.attachments; // Trello passes you the attachments on the card
      return t
        .card("name")
        .get("name")
        .then(function (cardName) {
          console.log("We just loaded the card name for fun: " + cardName);
          return [
            {
              // Dynamic badges can have their function rerun
              // after a set number of seconds defined by refresh.
              // Minimum of 10 seconds.
              dynamic: function () {
                // we could also return a Promise that resolves to
                // this as well if we needed to do something async first
                return {
                  text: "Dynamic " + (Math.random() * 100).toFixed(0).toString(),
                  icon: "https://tuinland.on.spiceworks.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCT0VXcHdZPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--355ef29d494b6bf56075f7825f4110a9199bb652/download-removebg-preview.png",
                  color: "green",
                  refresh: 10, // in seconds
                };
              },
            },
            {
              // It's best to use static badges unless you need your
              // badges to refresh.
              // You can mix and match between static and dynamic
              text: "Static",
              icon: HYPERDEV_ICON, // for card front badges only
              color: null,
            },
          ];
        });
    },
  });
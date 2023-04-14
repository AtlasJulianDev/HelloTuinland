window.TrelloPowerUp.initialize({
    'show-settings': function(t, options){
        return t.popup({
            title: "Custom Fields Settings",
            url: "settings.html",
            height: 184
        })
    }
})
/*
var Song = Backbone.Model.extend({
    initialize: function() {
        debugger
        console.log("A new song has been created.");
    }
});
var song = new Song();*/
//song.initialize();

/*
var Song = Backbone.Model.extend({
    defaults: {
        genre: "Jazz"
    }
});
var song = new Song({
    title: "Blue in Green",
    artist: "Miles Davis",
    publishYear: 1959
})
*/

/*
var Song = Backbone.Model.extend({
    validate: function(attrs) {
        if (!attrs.title) {
            return "Title is required";
        }
    }
});

var song = new Song();

song.isValid();

var lastError = song.validationError;
*/

/*
var Animal = Backbone.Model.extend({
    walk: function() {
        console.log("Animal walking...");
    }
});

var Dog = Animal.extend({
    walk: function() {
        Animal.prototype.walk.apply(this);
        
        console.log("Dog walking...");
    }
});

var dog = new Dog();

dog.walk();
*/

/*
//////////////////////
// Creating Models  //
//////////////////////
var Song = Backbone.Model.extend({
    idAttribute: "songId",
    urlRoot: "/api/songs",
    defaults: {
        downloads: 0
    },
    
    validate: function(attrs) {
        if (!attrs.title) {
            return "Title is required.";
        }
    }
});

var song = new Song({ songId: 1, title: "Blue in Green" });


//////////////////////////////////
// Working with the Attributes  //
//////////////////////////////////
song.set("genre", "Jazz");
var genre = song.get("genre");
song.unset("genre");
var hasGenre = song.has("genre");
song.clear();


/////////////////
// Validation  //
/////////////////
var isValid = song.isValid();
var lastError = song.validationError;

//////////////////////////////
// Syncing with the Server  //
//////////////////////////////
song.fetch({
    success: function() {
        console.log("fectch success!");
    },
    error: function() {
        console.log("fecth error!");
    }
});

song.save({}, {
        success: function() {
            console.log("save success");
        },
        error: function() {
            console.log("save error");
        }
});

song.destroy({
    success: function() {
        console.log("destroy error");
    },
    error: function() {
        cosole.log("destroy error");
    }
})
*/


/*
/////////////////////////
// Lecture 15 Project  //
/////////////////////////
var Vehicle = Backbone.Model.extend({
    idAttribute: "registrationNumber",
    urlRoot: "/api/vehicles",
    start: function() {
        console.log("Vehicle started");
    },
    
    validate: function(attrs) {
        if (!attrs.registrationNumber) {
            return "registrationNumber cannot be null or undefined.";
        }
    }
});

var Car = Vehicle.extend({
    start: function() {
        //console.log("Car with registration number " + this.attributes.registrationNumber + " started");
        console.log("Car with registration number " + this.get("registrationNumber") + " started");
    }
});

var car = new Car({
    registrationNumber: 123
});

car.start();
*/

//////////////////////////
// Creating Collections //
//////////////////////////
/*
var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
    model: Song
});

var songs = new Songs([
    new Song({ title: "Song 1"}),
    new Song({ title: "Song 2"}),
    new Song({ title: "Song 3"})
]);

songs.add(new Song({ title: "Song 4"}));

var firstSong = songs.at(0);

var songWithIdC1 = songs.get("c1");

songs.remove(firstSong);
*/

/*
var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
    model: Song
});

var songs = new Songs();

songs.add(new Song({ title: "Song 1", genre: "Jazz", downloads: 110 }), { at: 0});

songs.push(new Song({ title: "Song 2", genre: "Jazz", downloads: 90}));

var jazzSongs = songs.where({ genre: "Jazz"});

var firstJazzSong = songs.findWhere({ genre: "Jazz"});

console.log("Jazz Songs", jazzSongs);

console.log("First Jazz Song", firstJazzSong);

var filteredSongs = songs.where({ genre: "Jazz", title: "Song 2"});
console.log("Filtered Songs", filteredSongs);

var topDownloads = songs.filter(function(song) {
    return song.get("downloads") > 100;
});

console.log("Top Downloads", topDownloads);

songs.each(function(song) {
    for (var attr in song.attributes) {
        console.log(attr + ": " + song.attributes[attr]);
    }
});
*/

/////////////////////////
// Lecture 21 Project  //
/////////////////////////
/*
var Vehicle = Backbone.Model.extend({
    idAttribute: "registrationNumber",
    urlRoot: "/api/vehicles",
    start: function() {
        console.log("Vehicle started");
    },
    
    validate: function(attrs) {
        if (!attrs.registrationNumber) {
            return "registrationNumber cannot be null or undefined.";
        }
    }
});

var Car = Vehicle.extend({
    start: function() {
        //console.log("Car with registration number " + this.attributes.registrationNumber + " started");
        console.log("Car with registration number " + this.get("registrationNumber") + " started");
    }
});

var Cars = Backbone.Collection.extend({
    model: Car,
    url: "/api/cars"
});

var cars = new Cars([
    new Car({ registrationNumber: "XLI887", color: "Blue"}),
    new Car({ registrationNumber: "ZNP123", color: "Blue"}),
    new Car({ registrationNumber: "XUV456", color: "Gray"})
]);

var blueCars = cars.where({ color: "Blue" });
console.log(blueCars);

var someCar = cars.where( { registrationNumber: "XLI887" });
console.log(someCar);
cars.remove(someCar);

console.log("The convered JSON object for the cars is: " + cars.toJSON());

cars.each(function(car) {
    console.log(car);
})
*/

////////////
// Views  //
////////////
/*
var SongView = Backbone.View.extend({
    
    tagName: "span",
    
    className: "song",
    
    id: "1234",
    
    attributes: {
        "data-genre": "Jazz"
    },
    
    render: function() {
        this.$el.html("Hello World");
        return this;
    }
});

//var songView = new SongView({ el: "#container" });
var songView = new SongView();
//songView.render();

$("#container").html(songView.render().$el);
*/


/*
var Song = Backbone.Model.extend();

var SongView = Backbone.View.extend({
    
    render: function() {
        this.$el.html(this.model.get("title"));
        return this;
    }
});

var song = new Song({ title: "Blue in Green" });

var songView = new SongView({ el: "#container", model: song });
songView.render();
*/

/*
var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
    model: Song
});

var songs = new Songs([
    new Song({ title: "Blue in Green" }),
    new Song({ title: "So What" }),
    new Song({ title: "All Blues" })
]);

var SongView = Backbone.View.extend({
    tagName: "li",
    
    render: function() {
        this.$el.html(this.model.get("title"));
        return this;
    }
});

var SongListView = Backbone.View.extend({
    render: function() {
        var self = this;
        
        this.model.each(function(song) {
            var songView = new SongView({ model: song});
            self.$el.append(songView.render().$el);
        });
    }
});

var songListView = new SongListView({ el: "#songs", model: songs});
songListView.render();
*/

/*
var Song = Backbone.Model.extend();

var SongView = Backbone.View.extend({
    events: {
        "click": "onClick",
        "click .bookmark": "onClickBookmar"
    },
    
    onClick: function() {
        console.log("Listen Clicked");
    },
    
    onClickBookmar: function(e) {
        e.stopPropagation();
        
        console.log("Bookmark clicked");
    },
    
    render: function() {
        this.$el.html(this.model.get("title") + " <button>Listen</button> <button class = 'bookmark'>Bookmark</button>");
    }
});

var song = new Song({ title: "Blue in Green"});

var songView = new SongView({ el: "#songs", model: song});
songView.render();
*/

var Song = Backbone.Model.extend({
    defaults: {
        listeners: 0
    }
});

var SongView = Backbone.View.extend({
    initialize: function() {
        this.model.on("change", this.render, this);  
    },
    
    //onModelChange: function() {
    //    this.$el.addClass("someClass");
    //},
    
    render: function() {
        this.$el.html(this.model.get("title") + " - Listerner: " + this.model.get("listeners"));
        return this;
    }
});

var song = new Song({ title: "Blue in Green" });

var songView = new SongView({ el: "#songs", model: song});
songView.render();

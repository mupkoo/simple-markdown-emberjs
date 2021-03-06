App = Ember.Application.create();

// Initial data
var documents = [
    {
        id: '1',
        title: "Rails is Omakase",
        author: { name: "d2h" },
        date: new Date('02-14-2014'),
        excerpt: "There are lots of à la carte software environments in this world. Places where in order to eat, you must first carefully look over the menu of options to order exactly what you want.",
        body: "I want this for my ORM, I want that for my template language, and let's finish it off with this routing library. Of course, you're going to have to know what you want, and you'll rarely have your horizon expanded if you always order the same thing, but there it is. It's a very popular way of consuming software.\n\nRails is not that. Rails is omakase."
    }, {
        id: '2',
        title: "The Parley Letter",
        author: { name: "d2h" },
        date: new Date('03-23-2014'),
        excerpt: "My [appearance on the Ruby Rogues podcast](http://rubyrogues.com/056-rr-david-heinemeier-hansson/) recently came up for discussion again on the private Parley mailing list.",
        body: "A long list of topics were raised and I took a time to ramble at large about all of them at once. Apologies for not taking the time to be more succinct, but at least each topic has a header so you can skip stuff you don't care about.\n\n### Maintainability\n\nIt's simply not true to say that I don't care about maintainability. I still work on the oldest Rails app in the world."
    }
];

// Routes
App.Router.map(function() {
    this.route('about');
    this.resource('documents', function () {
        this.resource('document', { path: ':document_id' });
    });
});

App.DocumentsRoute = Ember.Route.extend({
    model: function () {
        return documents;
    }
});

App.DocumentRoute = Ember.Route.extend({
    model: function (params) {
        return documents.findBy('id', params.document_id);
    }
});

// Controllers
App.DocumentController = Ember.ObjectController.extend({
    isEditing: false,

    actions: {
        edit: function () {
            this.set('isEditing', true);
        },

        doneEditing: function () {
            this.set('isEditing', false);
        }
    }
});

// Handlebar helpers
Ember.Handlebars.helper('format-date', function (date) {
    return moment(date).fromNow();
});

var showdown = new Showdown.converter();
Ember.Handlebars.helper('parse-markdown', function (input) {
    return new Handlebars.SafeString(showdown.makeHtml(input));
})

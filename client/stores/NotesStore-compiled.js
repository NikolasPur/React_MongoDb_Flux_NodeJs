'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _events = require('events');

var _dispatcherAppDispatcher = require('../dispatcher/AppDispatcher');

var _dispatcherAppDispatcher2 = _interopRequireDefault(_dispatcherAppDispatcher);

var _constantsAppConstants = require('../constants/AppConstants');

var _constantsAppConstants2 = _interopRequireDefault(_constantsAppConstants);

var CHANGE_EVENT = 'change';

var _notes = [];
var _loadingError = null;
var _isLoading = true;

function formatNote(note) {
    return {
        id: note._id,
        title: note.title,
        text: note.text,
        color: note.color || '#ffffff',
        createdAt: note.createdAt
    };
}

var TasksStore = Object.assign({}, _events.EventEmitter.prototype, {
    isLoading: function isLoading() {
        return _isLoading;
    },

    getNotes: function getNotes() {
        return _notes;
    },

    emitChange: function emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

_dispatcherAppDispatcher2['default'].register(function (action) {
    switch (action.type) {
        case _constantsAppConstants2['default'].LOAD_NOTES_REQUEST:
            {
                _isLoading = true;

                TasksStore.emitChange();
                break;
            }

        case _constantsAppConstants2['default'].LOAD_NOTES_SUCCESS:
            {
                _isLoading = false;
                _notes = action.notes.map(formatNote);
                _loadingError = null;

                TasksStore.emitChange();
                break;
            }

        case _constantsAppConstants2['default'].LOAD_NOTES_FAIL:
            {
                _loadingError = action.error;

                TasksStore.emitChange();
                break;
            }

        default:
            {
                console.log('No such handler');
            }
    }
});

exports['default'] = TasksStore;
module.exports = exports['default'];

//# sourceMappingURL=NotesStore-compiled.js.map
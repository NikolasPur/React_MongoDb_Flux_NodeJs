'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dispatcherAppDispatcher = require('../dispatcher/AppDispatcher');

var _dispatcherAppDispatcher2 = _interopRequireDefault(_dispatcherAppDispatcher);

var _constantsAppConstants = require('../constants/AppConstants');

var _constantsAppConstants2 = _interopRequireDefault(_constantsAppConstants);

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

var NoteActions = {
    loadNotes: function loadNotes() {
        _dispatcherAppDispatcher2['default'].dispatch({
            type: _constantsAppConstants2['default'].LOAD_NOTES_REQUEST
        });

        _api2['default'].listNotes().then(function (_ref) {
            var data = _ref.data;
            return _dispatcherAppDispatcher2['default'].dispatch({
                type: _constantsAppConstants2['default'].LOAD_NOTES_SUCCESS,
                notes: data
            });
        })['catch'](function (err) {
            return _dispatcherAppDispatcher2['default'].dispatch({
                type: _constantsAppConstants2['default'].LOAD_NOTES_FAIL,
                error: err
            });
        });
    },

    createNote: function createNote(note) {
        var _this = this;

        _api2['default'].createNote(note).then(function () {
            return _this.loadNotes();
        })['catch'](function (err) {
            return console.error(err);
        });
    },

    deleteNote: function deleteNote(noteId) {
        var _this2 = this;

        _api2['default'].deleteNote(noteId).then(function () {
            return _this2.loadNotes();
        })['catch'](function (err) {
            return console.error(err);
        });
    }
};

exports['default'] = NoteActions;
module.exports = exports['default'];

//# sourceMappingURL=NotesActions-compiled.js.map
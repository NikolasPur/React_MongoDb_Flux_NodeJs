'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _etcConfigJson = require('../../etc/config.json');

exports['default'] = {
    listNotes: function listNotes() {
        return _axios2['default'].get(_etcConfigJson.apiPrefix + '/notes');
    },

    createNote: function createNote(data) {
        return _axios2['default'].post(_etcConfigJson.apiPrefix + '/notes', data);
    },

    deleteNote: function deleteNote(noteId) {
        return _axios2['default']['delete'](_etcConfigJson.apiPrefix + '/notes/' + noteId);
    }
};
module.exports = exports['default'];

//# sourceMappingURL=index-compiled.js.map
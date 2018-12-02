/**

 # Zadanie
 Zobacz jak zmieni się przykład z c105-dark-callback-hell jeśli zastosujemy Promise API.
 Przepisz na Promise API.

 #Cel:
 Promise API jest super alternatywą dla klasycznych "callbacków".
 Wszędzie tam gdzie chcemy wykonać operację w kilku krokach a mamy zrobić to asynchronicznie,
 warto użyć Promise.

 */

const dbUsers = [
    {id: 19, name: 'Janusz', lastname: 'Kos'},
    {id: 1, name: 'Michal', lastname: 'Kowalski', photos: [{id: 1, src: '/user/michal_face.jpg'}]},
    {id: 3, name: 'Michal', lastname: 'Ko'},
];
const dbAPI = {

    getUsersByName: function (name) {
        const found = dbUsers.find(usr => usr.name === name);
        new Promise(found || []);
    },
    getUserPhotos: function (userId) {
        const found = dbUsers.find(usr => usr.id === userId);
        new Promise(found && found.photos ? found.photos : []);
    },
    getPhotoSrc: function (photo) {

        new Promise(photo.src || '')
    }
};

// Zjawisko "callback hell" wygląda następująco:
const usersByName = dbAPI.getUsersByName('Michal')
    .then(user => getUserPhotos(user.id))
    .then(result2 => getPhotoSrc(result2));


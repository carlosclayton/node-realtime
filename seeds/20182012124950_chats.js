
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chats').del()
  .then(function () {
      // Inserts seed entries
      return knex('chats').insert([
      {
        "id": 1,
        "room": "room#4",
        "message": "velit cillum ea duis ea officia esse consequat tempor in",
        "user_id": 3
      },
      {
        "id": 2,
        "room": "room#1",
        "message": "sit sit reprehenderit quis magna veniam veniam voluptate cillum do",
        "user_id": 4
      },
      {
        "id": 3,
        "room": "room#4",
        "message": "sint enim pariatur qui in anim velit irure commodo est",
        "user_id": 1
      },
      {
        "id": 4,
        "room": "room#3",
        "message": "consectetur pariatur nisi tempor minim occaecat exercitation labore incididunt nisi",
        "user_id": 3
      },
      {
        "id": 5,
        "room": "room#2",
        "message": "nisi qui do incididunt sit sit nulla in sit fugiat",
        "user_id": 4
      },
      {
        "id": 6,
        "room": "room#2",
        "message": "officia aliquip tempor velit fugiat quis non culpa non ullamco",
        "user_id": 1
      },
      {
        "id": 7,
        "room": "room#4",
        "message": "quis eiusmod sint Lorem ea ipsum labore pariatur minim cillum",
        "user_id": 1
      },
      {
        "id": 8,
        "room": "room#2",
        "message": "do laboris minim velit duis in ad ad veniam fugiat",
        "user_id": 2
      },
      {
        "id": 9,
        "room": "room#4",
        "message": "consectetur velit veniam aute laborum reprehenderit veniam laborum id ut",
        "user_id": 4
      },
      {
        "id": 10,
        "room": "room#1",
        "message": "id Lorem consequat fugiat quis mollit Lorem ullamco excepteur Lorem",
        "user_id": 4
      },
      {
        "id": 11,
        "room": "room#1",
        "message": "velit nisi excepteur amet nisi qui ea qui consequat nulla",
        "user_id": 2
      },
      {
        "id": 12,
        "room": "room#1",
        "message": "nisi ad mollit et proident occaecat sint do voluptate nisi",
        "user_id": 4
      },
      {
        "id": 13,
        "room": "room#2",
        "message": "dolore consequat anim aute commodo incididunt irure laboris aute occaecat",
        "user_id": 2
      },
      {
        "id": 14,
        "room": "room#1",
        "message": "labore dolore consequat sint veniam ea pariatur tempor qui veniam",
        "user_id": 2
      },
      {
        "id": 15,
        "room": "room#1",
        "message": "amet proident pariatur exercitation aute Lorem ullamco incididunt irure reprehenderit",
        "user_id": 3
      },
      {
        "id": 16,
        "room": "room#1",
        "message": "sint ullamco cillum commodo laborum ex adipisicing sit dolore et",
        "user_id": 2
      },
      {
        "id": 17,
        "room": "room#4",
        "message": "mollit fugiat velit excepteur nulla mollit eu qui magna elit",
        "user_id": 2
      }
      ]);
    });
};

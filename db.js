const nedb = require('nedb'),
      db = new nedb({filename: 'youtube.db', autoload: true})

db.insert([{ a: 5, b: 10 }], (err, newDocs) => {
  console.log('inserting into db')
})

db.find({ a: 5 }, (err, docs) => {
  console.log(docs)
}

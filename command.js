// JASKIS
// paste the MongoDB commands you use underneath each prompt

// GETTING STARTED
// 1. Create a database called jaskis
use Jaski
'switched to db Jaski'


// 2. Create a collection called bounties
db.createCollection('bounties')
{ ok: 1 }
show collections
bounties

// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object
{ _id: ObjectId("6359f35b29ad76044494ae8e"),
  name: 'Thanoceros' }

// 2. Query for all bounties in the bounties collection
{ _id: ObjectId("6359f35b29ad76044494ae8e"),
  name: 'Thanoceros' }

// 3. Insert many bounties at once using the given objects
db.bounties.insertMany([
    {
      "name": "Lokinkajou",
      "species": "Kinkajou",
      "location": "Tropical rainforest",
      "wantedFor": "Partying too late at night",
      "client": "White tiger",
      "reward": 1000,
      "captured": false
    },
    {
      "name": "Nebullama",
      "species": "Llama",
      "location": "Grasslands",
      "wantedFor": "Drinking all the water from the ocean",
      "client": "Songbird",
      "reward": 2500,
      "captured": false
    },
    {
      "name": "Polarwind",
      "species": "Polar Bear",
      "location": "Arctic",
      "wantedFor": "Not hibernating",
      "client": "Sabertooth",
      "reward": 4000,
      "captured": false
    },
    {
      "name": "Wrecking Crows",
      "species": "Crow",
      "location": "Grasslands",
      "wantedFor": "Cawing too loudly",
      "client": "Red wolf",
      "reward": 40000,
      "captured": false
    },
    {
      "name": "Grandhog",
      "species": "Groundhog",
      "location": "Woodlands",
      "wantedFor": "Not coming out of the hole on time and prolonging winter",
      "client": "Songbird",
      "reward": 50000,
      "captured": false
    },
    {
      "name": "Grim Panda",
      "species": "Giant Panda",
      "location": "Temperate forest",
      "wantedFor": "Eating all the bamboo",
      "client": "Red wolf",
      "reward": 5000,
      "captured": false
    }
  ])
  { acknowledged: true,
    insertedIds: 
     { '0': ObjectId("6367ea754c6af8fedacf4e02"),
       '1': ObjectId("6367ea754c6af8fedacf4e03"),
       '2': ObjectId("6367ea754c6af8fedacf4e04"),
       '3': ObjectId("6367ea754c6af8fedacf4e05"),
       '4': ObjectId("6367ea754c6af8fedacf4e06"),
       '5': ObjectId("6367ea754c6af8fedacf4e07") } }
// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands
{ _id: ObjectId("6367ea754c6af8fedacf4e03"),
  name: 'Nebullama',
  species: 'Llama',
  location: 'Grasslands',
  wantedFor: 'Drinking all the water from the ocean',
  client: 'Songbird',
  reward: 2500,
  captured: false }
{ _id: ObjectId("6367ea754c6af8fedacf4e05"),
  name: 'Wrecking Crows',
  species: 'Crow',
  location: 'Grasslands',
  wantedFor: 'Cawing too loudly',
  client: 'Red wolf',
  reward: 40000,
  captured: false }
// 2. Query for all bounties with a reward worth 10000 or more
db.bounties.find({reward: {$gt: 10000}})
{ _id: ObjectId("6367ea754c6af8fedacf4e05"),
  name: 'Wrecking Crows',
  species: 'Crow',
  location: 'Grasslands',
  wantedFor: 'Cawing too loudly',
  client: 'Red wolf',
  reward: 40000,
  captured: false }
{ _id: ObjectId("6367ea754c6af8fedacf4e06"),
  name: 'Grandhog',
  species: 'Groundhog',
  location: 'Woodlands',
  wantedFor: 'Not coming out of the hole on time and prolonging winter',
  client: 'Songbird',
  reward: 50000,
  captured: false }

// 3. Query for all bounties, but exclude the client attribute from being shown
db.bounties.find({clients: 0})
db.bounties.find()
{ _id: ObjectId("6359f35b29ad76044494ae8e"),
  name: 'Thanoceros' }
{ _id: ObjectId("6367ea754c6af8fedacf4e02"),
  name: 'Lokinkajou',
  species: 'Kinkajou',
  location: 'Tropical rainforest',
  wantedFor: 'Partying too late at night'
  reward: 1000,
  captured: false }
{ _id: ObjectId("6367ea754c6af8fedacf4e03"),
  name: 'Nebullama',
  species: 'Llama',
  location: 'Grasslands',
  wantedFor: 'Drinking all the water from the ocean',
  reward: 2500,
  captured: false }
{ _id: ObjectId("6367ea754c6af8fedacf4e04"),
  name: 'Polarwind',
  species: 'Polar Bear',
  location: 'Arctic',
  wantedFor: 'Not hibernating',
  reward: 4000,
  captured: false }
{ _id: ObjectId("6367ea754c6af8fedacf4e05"),
  name: 'Wrecking Crows',
  species: 'Crow',
  location: 'Grasslands',
  wantedFor: 'Cawing too loudly',
  reward: 40000,
  captured: false }
{ _id: ObjectId("6367ea754c6af8fedacf4e06"),
  name: 'Grandhog',
  species: 'Groundhog',
  location: 'Woodlands',
  wantedFor: 'Not coming out of the hole on time and prolonging winter',
  reward: 50000,
  captured: false }
{ _id: ObjectId("6367ea754c6af8fedacf4e07"),
  name: 'Grim Panda',
  species: 'Giant Panda',
  location: 'Temperate forest',
  wantedFor: 'Eating all the bamboo',
  reward: 5000,
  captured: false }
// 4. Query for a Groundhog in the Woodlands

// Update and Delete
// 1. Update the reward for Polarwind to 10000

// 2. Remove Lokinkajou

// 3. Delete all bounties sent by Songbird

// 4. Update all captured statuses to true
const User = require('./User');
const Gallery = require('./Gallery');
const Plant = require('./Plant');

Gallery.hasMany(Plant, {
    foreignKey: 'gallery_id',
  });
  
  Plant.belongsTo(Gallery, {
    foreignKey: 'gallery_id',
  });
  

module.exports = { User, Gallery, Plant };

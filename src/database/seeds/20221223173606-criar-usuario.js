const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'John Doe',
          email: 'john@john.com',
          password_hash: await bcrypt.hash('123456789', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Perry Doe',
          email: 'Perry@john.com',
          password_hash: await bcrypt.hash('456192486', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down() {
    /* ed */
  },
};

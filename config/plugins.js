module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API'),
        },
        settings: {
          defaultFrom: 'shaneoneill1995@gmail.com',
          defaultReplyTo: 'shaneoneill1995@gmail.com',
        },
      },
    },
    // ...
  });
const DOMAIN_NAME = process.env.DOMAIN_NAME;

module.exports = {
    PATH_TO_SITE: `/var/www/${DOMAIN_NAME}`,
    PATH_TO_BUNDLE: `/var/www/${DOMAIN_NAME}/wp-content/public`,
    PATH_TO_PUBLIC: '/wp-content/public/',
};

module.exports = {
	description: 'installing Bootstrap for SASS to project',

	normalizeEntityName: function() {
		// this prevents an error when the entityName is
		// not specified (since that doesn't actually matter
		// to us
	},

	afterInstall: function(options) {
		return this.addPackageToProject('ember-cli-sass')
		  .then(this.addBowerPackageToProject.bind(this, 'bootstrap-sass'));
	}
};

import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'tenis-app-bpa-tournament-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'tenis-app-challenger+player':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'lastName',
            required: true,
            relationName: 'player',
            projection: 'bpa_PlayerL',
            autocomplete: true,
          };
          break;

        case 'tenis-app-toss+match':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'name',
            required: true,
            relationName: 'match',
            projection: 'MatchL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});

/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */

define([], function () {
  function beforeSubmit(context) {
 log.debug({
          title: "context.type: ",
          details: context.type
       });
    if (context.type === context.UserEventType.CREATE || context.type === context.UserEventType.EDIT || context.type === context.UserEventType.XEDIT) {
      var newRecord = context.newRecord;

log.debug({
          title: "field: ",
          details: newRecord.getValue({fieldId:'custbody_celigo_etail_ship_total_var'})
       });

      // Check if the custom field exists on the record
      if (newRecord.getValue({fieldId:'custbody_celigo_etail_ship_total_var'})) {
        var currentValue = newRecord.getValue('custbody_celigo_etail_ship_total_var');
        var updatedValue = currentValue - 3;
 log.debug({
          title: "updatedValue: ",
          details: updatedValue
       });
        // Set the updated value back to the custom field
        newRecord.setValue({
          fieldId: 'custbody_celigo_etail_ship_total_var',
          value: updatedValue
        });
      }
    }
  }

  return {
    beforeSubmit: beforeSubmit
  };
});

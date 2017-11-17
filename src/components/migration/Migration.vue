<template lang="pug">
    .base-template-editor(v-if='isAuthorized')
        .input-group
            .input-group-addon
            span.input-group-btn
                button.btn.btn-default(type='button' v-on:click='save()')
            .input-group.fill-width
            .input-group-addon
                | Name
            input.form-control(v-model='baseTemplate.name' type='text', placeholder='Base Template Name')
            .input-group.fill-width
            .input-group-addon
                | Description
            input.form-control(v-model='baseTemplate.description' type='text', placeholder='Base Template Description')
            v-select(multiple :options='baseTemplate.facets' placeholder="Search Facets" label="name")
        div(v-for='facet in baseTemplate.facets' v-if='facet.parameters')
            .separator()
            dynamic-facet-editor(ng-repeat-end facet='facet')
        div
            input.mcp-standard-checkbox(type='checkbox' v-model='baseTemplate.hasMcpStandard')
            span has MCP Standard?
        div
            input.mcp-standard-checkbox(type='checkbox' v-model='baseTemplate.canBulkUpload')
            span can be used for bulk upload?
        .separator
        .panel.panel-default
            .panel-heading Facet Field Description Overrides
            .panel-body
            .well.well-sm(ng-repeat='description in baseTemplate.facetFieldDescriptionOverrides')
                .input-group
                .input-group-addon
                    label Field Name
                input.form-control(type='text' v-model='description.key')
                .input-group-btn
                    button.btn.btn-danger(v-on:click='baseTemplate.facetFieldDescriptionOverrides.splice($index, 1)') Remove
                .input-group
                .input-group-addon
                    label Description
                textarea.form-control(type='textarea' v-model='description.value')
            .separator
            .well()
                .input-group
                .input-group-addon
                    label Field Name
                input.form-control(type='text')
                .input-group-btn
                    button.btn.btn-primary(v-on:click='addDescriptionOverride($pendingKey, $pendingValue)') Add
                .input-group
                .input-group-addon
                    label Description
                textarea.form-control(type='textarea')
</template>

<script>
import Vue from 'vue';
import vSelect from 'vue-select';

const DEFAULT_FACET_NAMES = [
    'Orderable',
    'Quantity',
    'AdditionalInformation',
    'FlatSurface',
    'Fulfillment Locations',
    'Attributes',
    'Product Cost'
];

export default {
    name: 'migration',
    components: {vSelect},
    data() {
        return {
            baseTemplate: {
                facets: []
            },
            description: {

            },
            isAuthorized: true
        }
    },

    methods: {
        save() {
            return;
        }
    }
}

</script>

<<style lang="css">
.base-template-editor {
  padding: 5px;
  .mcp-standard-checkbox {
    margin-right: 5px;
    margin-left: 5px;
  }

  margin-bottom: 16px;
}
</style>



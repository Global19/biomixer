var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "./ConceptNodeFilterWidget", "../Utils", "../NodeFilterWidget", "./ConceptNodeFilterWidget", "./ConceptPathsToRoot", "./ConceptGraph"], function (require, exports, ConceptFilterWidget) {
    var CherryPickConceptFilter = (function (_super) {
        __extends(CherryPickConceptFilter, _super);
        function CherryPickConceptFilter(conceptGraph, graphView, centralConceptUri) {
            _super.call(this, CherryPickConceptFilter.SUB_MENU_TITLE, graphView, conceptGraph);
            this.centralConceptUri = centralConceptUri;
            this.implementation = this;
            this.pathToRootView = graphView;
        }
        CherryPickConceptFilter.prototype.generateCheckboxLabel = function (node) {
            return node.name + " (" + node.ontologyAcronym + ")";
        };
        CherryPickConceptFilter.prototype.generateColoredSquareIndicator = function (node) {
            return "<span style='font-size: large; color: " + node.nodeColor + "'>\u25A0</span>";
        };
        CherryPickConceptFilter.prototype.computeCheckId = function (node) {
            return this.getClassName() + "_for_" + String(node.conceptUriForIds);
        };
        CherryPickConceptFilter.prototype.computeCheckboxElementDomain = function (node) {
            return [node];
        };
        CherryPickConceptFilter.prototype.getFilterTargets = function () {
            return this.graphView.sortConceptNodesCentralOntologyName();
        };
        CherryPickConceptFilter.prototype.checkboxChanged = function (checkboxContextData, setOfHideCandidates, checkbox) {
            if (checkbox.is(':checked')) {
                this.graphView.unhideNodeLambda(this.graphView)(checkboxContextData, 0);
            }
            else {
                this.graphView.hideNodeLambda(this.graphView)(checkboxContextData, 0);
            }
            this.pathToRootView.refreshOtherFilterCheckboxStates([checkboxContextData], this);
            return [checkboxContextData];
        };
        CherryPickConceptFilter.prototype.updateCheckboxStateFromView = function (affectedNodes) {
            var outerThis = this;
            $.each(affectedNodes, function (i, node) {
                var checkId = outerThis.implementation.computeCheckId(node);
                $("#" + checkId).prop("checked", !outerThis.graphView.isNodeHidden(node));
            });
        };
        CherryPickConceptFilter.prototype.getHoverNeedsAdjacentHighlighting = function () {
            return true;
        };
        CherryPickConceptFilter.SUB_MENU_TITLE = "Concepts Displayed";
        return CherryPickConceptFilter;
    })(ConceptFilterWidget.AbstractConceptNodeFilterWidget);
    exports.CherryPickConceptFilter = CherryPickConceptFilter;
});

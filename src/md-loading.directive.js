import _ from 'lodash';

import loadingTemplate from './md-loading.directive.html';

export default class hpLoading {
    constructor($parse, $compile) {
        this.$parse = $parse;
        this.$compile = $compile;

        this.restrict = 'A';
    }

    static create() {
        return new hpLoading(...arguments);
    }

    link(scope, element, attrs) {
        const loadingAttr = attrs.hpLoading;

        if (!loadingAttr) {
            throw new Error('O tracker deve ser passado para a diretiva de loading');
        }

        const trackObject = _.get(scope, loadingAttr);

        if (!trackObject) {
            throw new Error('O tracker não é um objeto válido');
        }

        const loadingElement = this.$compile(loadingTemplate)(scope);

        scope.$watch(`${loadingAttr}.tracking()`, (newValue) => {
            if (newValue) {
                addLoading();
            } else {
                removeLoading();
            }
        });

        function addLoading() {
            element.prepend(loadingElement);
        }

        function removeLoading() {
            loadingElement.remove();
        }
    }
}

hpLoading.create.$inject = ['$parse', '$compile'];
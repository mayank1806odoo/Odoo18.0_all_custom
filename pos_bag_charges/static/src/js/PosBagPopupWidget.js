/** @odoo-module */

import { usePos } from "@point_of_sale/app/store/pos_hook";
import { Component } from "@odoo/owl";
import { _t } from "@web/core/l10n/translation";
import { Dialog } from "@web/core/dialog/dialog";

export class PosBagPopup extends Component {
    static template = "pos_bag_charges.PosBagPopup";
    static components = { Dialog };

    setup() {
        this.pos = usePos();
    }

    get bags() {
        const bags = [];
        this.props.products.forEach(prd => {
            prd['bag_image_url'] = `/web/image?model=product.product&field=image_128&id=${prd.id}&write_date=${prd.write_date}&unique=1`;
            bags.push(prd);
        });
        return bags;
    }
    
    
    click_on_bag_product(event) {
        var self = this;
        var bag_id = parseInt(event.currentTarget.dataset['productId'])        
        let product = self.pos.models["product.product"].getBy("id", bag_id);
        this.pos.addLineToCurrentOrder({
            product_id : product,
            tax_ids: [["link", ...product.taxes_id]]
        })
        this.pos.showScreen('ProductScreen');
        this.props.close({ confirmed: false, payload: false });
    }
}
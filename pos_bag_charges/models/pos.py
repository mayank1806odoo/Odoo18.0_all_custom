# -*- coding: utf-8 -*-
# Part of BrowseInfo. See LICENSE file for full copyright and licensing details.

from odoo import fields, models, api, _


class PosConfig(models.Model):
    _inherit = 'pos.config'

    bag_category_id = fields.Many2one('pos.category', 'Bag Charges Category')
    allow_bag_charges = fields.Boolean('Allow Bag Charges')


class ResConfigSettings(models.TransientModel):
    _inherit = 'res.config.settings'

    pos_bag_category_id = fields.Many2one(
        related='pos_config_id.bag_category_id', readonly=False)
    allow_bag_charges = fields.Boolean(
        related='pos_config_id.allow_bag_charges', readonly=False)

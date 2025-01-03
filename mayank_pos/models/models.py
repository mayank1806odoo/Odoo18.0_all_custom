# -*- coding: utf-8 -*-

# from odoo import models, fields, api


# class mayank_pos(models.Model):
#     _name = 'mayank_pos.mayank_pos'
#     _description = 'mayank_pos.mayank_pos'

#     name = fields.Char()
#     value = fields.Integer()
#     value2 = fields.Float(compute="_value_pc", store=True)
#     description = fields.Text()
#
#     @api.depends('value')
#     def _value_pc(self):
#         for record in self:
#             record.value2 = float(record.value) / 100


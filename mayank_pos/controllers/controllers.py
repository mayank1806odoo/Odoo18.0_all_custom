# -*- coding: utf-8 -*-
# from odoo import http


# class MayankPos(http.Controller):
#     @http.route('/mayank_pos/mayank_pos', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/mayank_pos/mayank_pos/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('mayank_pos.listing', {
#             'root': '/mayank_pos/mayank_pos',
#             'objects': http.request.env['mayank_pos.mayank_pos'].search([]),
#         })

#     @http.route('/mayank_pos/mayank_pos/objects/<model("mayank_pos.mayank_pos"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('mayank_pos.object', {
#             'object': obj
#         })


(function(){var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
TAPi18n.languages_available_for_project["es"] = ["Spanish (Spain)","Español"];
if(_.isUndefined(TAPi18n.translations["es"])) {
  TAPi18n.translations["es"] = {};
}

if(_.isUndefined(TAPi18n.translations["es"][namespace])) {
  TAPi18n.translations["es"][namespace] = {};
}

_.extend(TAPi18n.translations["es"][namespace], {"view":"Vista","menu":"Menu","top":"Todos","new":"Nuevos","digest":"Resumen","users":"Usuarios","settings":"Configuración","admin":"Admin?","post":"Post","toolbox":"Herramientas","sign_up_sign_in":"Connectarse/Crear una cuenta","my_account":"Mi Cuenta","view_profile":"Ver perfil","edit_account":"Editar cuenta","new_posts":"Nuevo Post","your_comment_has_been_deleted":"Tu comentario ha sido borrado","comment_":"Comentario","delete_comment":"Borrar el comentario","add_comment":"Añadir comentario","upvote":"Voto Positivo","downvote":"Voto Negativo","link":"link","edit":"Editar","reply":"Contestar","no_comments":"No hay comentarios.","you_are_already_logged_in":"Ya estás conectado","sorry_this_is_a_private_site_please_sign_up_first":"Lo sentimos pero esta pagina es privada. Por favor, conéctese para verla","thanks_for_signing_up":"Gracias por registrarte","the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up":"El sitio solo es accesible mediante invitación, pero te lo haremos saber tan pronto como abra al público.","sorry_you_dont_have_the_rights_to_view_this_page":"Lo sentimos pero no tienes los derechos suficientes para ver esta pagina","not_found":"No encontramos nada!","were_sorry_whatever_you_were_looking_for_isnt_here":"Lo sentimos pero aqui no hay nada.. ","no_notifications":"Ninguna notificación","1_notification":"1 notificación","notifications":"notificaciones","mark_all_as_read":"Marcar todas como leídas","your_post_has_been_deleted":"Tu post ha sido borrado.","the_top_5_posts_of_each_day":"Los 5 mejores posts de cada día","previous_day":"Dia anterior","next_day":"Dia siguiente","sorry_no_posts_for_today":"Lo sentimos, no hay post para hoy","today":"Hoy","yesterday":"Ayer","created":"Creado","title":"Título","suggest_title":"Proponer un titulo","url":"URL","short_url":"URL Corta","body":"Descripción","category":"Categoría","inactive_":"Inactivo?","sticky_":"Pegado?","submission_date":"Fecha de entrega","submission_time":"Hora de entrega","date":"Fecha","submission":"Entrega","note_this_post_is_still_pending_so_it_has_no_submission_timestamp_yet":"Nota : Este post esta en proceso de validación entonces no tiene fecha de entrega todavía.","user":"Usuario","status_":"Estado","approved":"Aprobado","rejected":"Rechezado","delete_post":"Borrar este post","thanks_your_post_is_awaiting_approval":"Gracias, su post esta esperando validación.","sorry_couldnt_find_a_title":"Lo sentimos, impossible de encontrar este título.","please_fill_in_an_url_first":"Tienes que poner una URL.","share":"Compartir","discuss":"Comentar","upvote_":"Votar","sticky":"Pegado","status":"Estado","votes":"votos","basescore":"baseScore","score":"puntuación","clicks":"clicks","views":"views","inactive":"inactivo","comment":"comentario","comments":"comentarios","point":"punto","points":"puntos","please_complete_your_profile_below_before_continuing":"Por favor complete su perfil antes de seguir.","account":"Cuenta","username":"Nombre de usuario","display_name":"Nombre","email":"Email","bio":"Bio:","password":"Contraseña","change_password":"Cambiar de contraseña","old_password":"Antigua Contraseña","new_password":"Nueva Contraseña","email_notifications":"Notificaciónes por Email","comments_on_my_posts":"Comentarios de mi post","replies_to_my_comments":"Respuestas a mis comentarios","forgot_password":"Olvidaste tu contraseña?","profile_updated":"Perfil actualizado","please_fill_in_your_email_below_to_finish_signing_up":"Por favor, introduzca su email para terminar de inscribirse.","invite":"Invitar","uninvite":"Cancelar la invitación","make_admin":"Hacer admin","unadmin":"Borrar de admin","delete_user":"Borrar usuario","are_you_sure_you_want_to_delete":"Está seguro de que desea eliminar","reset_password":"Restablecer contraseña","password_reset_link_sent":"Enlace de restablecimiento de contraseña enviado!!","name":"Name:","posts":"Posts","comments_":"Comentarios","karma":"Karma","is_invited":"Esta invitado?","is_admin":"Es admin?","delete":"Borrar","member_since":"Miembro desde","edit_profile":"Modificar el perfil","sign_in":"Registrarse","sign_in_":"Registrarse","sign_up_":"Inscribirse","dont_have_an_account":"¿No tiene cuenta de usuario?","already_have_an_account":"¿Ya tiene cuenta?","sign_up":"Inscribirse","please_fill_in_all_fields":"Tiene que rellenar todos los campos","invite_":"Invitación ","left":" restante","invite_none_left":"Invitación (no queda)","all":"Todos","invited":"Invited?","uninvited":"No invitado","filter_by":"Filtrar por","sort_by":"Ordenar por","sorry_you_do_not_have_access_to_this_page":"Lo sentimos, usted no tiene acceso a esta página","please_sign_in_first":"Tiene que registrarse primero.","sorry_you_have_to_be_an_admin_to_view_this_page":"Lo sentimos, usted tiene que ser un administrador para ver esta página.","sorry_you_dont_have_permissions_to_add_new_items":"Lo sentimos, usted no tiene permisos para agregar nuevos elementos.","sorry_you_cannot_edit_this_post":"Lo sentimos, no puede editar este post.","sorry_you_cannot_edit_this_comment":"Lo sentimos, no puede editar este comentario.","you_need_to_login_and_be_an_admin_to_add_a_new_category":"Usted tiene que entrar y ser un administrador para añadir una nueva categoría","you_need_to_login_or_be_invited_to_post_new_comments":"¡Tienes que iniciar sesión o ser invitado a publicar nuevos comentarios.","please_wait":"Espera por favor","seconds_before_commenting_again":" segundos antes de comentar de nuevo","your_comment_is_empty":"Tu comentario está vacío","you_dont_have_permission_to_delete_this_comment":"Usted no tiene permiso para eliminar este comentario.","you_need_to_login_or_be_invited_to_post_new_stories":"¡Tienes que iniciar sesión o ser invitado para publicar nuevas historias.","please_fill_in_a_headline":"Por favor rellene el titulo","this_link_has_already_been_posted":"Este enlace ya ha sido publicado","sorry_you_cannot_submit_more_than":"Lo sentimos, usted no puede presentar más de ","posts_per_day":" posts por dia","someone_replied_to_your_comment_on":"Alguien respondió a tu comentario en","has_replied_to_your_comment_on":" ha respondido a su comentario sobre","read_more":"Leer más","a_new_comment_on_your_post":"Un nuevo comentario en su post","you_have_a_new_comment_by":"Usted tiene un nuevo comentario de ","on_your_post":" en su post","has_created_a_new_post":" ha creado un nuevo post","your_account_has_been_approved":"Su cuenta ha sido aprobada.","start_posting":"Empezar a publicar","please_fill_in_a_title":"Please fill in a title","seconds_before_posting_again":" seconds before posting again","upvoted":"Upvoted","posted_date":"Posted Date","posted_time":"Posted Time","profile":"Profile","sign_out":"Sign Out","invitedcount":"InvitedCount","invites":"Invites","actions":"Actions","invites_left":"invites left","id":"ID","github":"GitHub","site":"Site","upvoted_posts":"Upvoted Posts","downvoted_posts":"Downvoted Posts","mark_as_read":"Mark as read","pending":"Pendiente","loading":"Cargando...","submit":"Enviar","you_must_be_logged_in":"Debe estar conectado","are_you_sure":"¿Está seguro? ","please_log_in_first":"Por favor, inicia sesión","sign_in_sign_up_with_twitter":"Inicia sesión/Inscribete con Twitter","load_more":"Cargar más"});

})();
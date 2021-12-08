def obj_to_post(obj):
    post = dict(vars(obj))

    # convert to string

    # if obj.modify_dt:
    #     post['modify_dt'] = obj.modify_dt.strftime('%Y-%m-%d %H:%M')
    # else:
    #     post['modify_dt'] = ''

    # if obj.tags:
    #     post['tags'] = [tag.name for tag in obj.tags.all()]
    # else:
    #     post['tags'] = ''

    # if obj.owner:
    #     post['owner'] = obj.owner.username
    # else:
    #     post['owner'] = 'Anonymous'

    post['modify_dt'] = obj.modify_dt.strftime(
        '%Y-%m-%d %H:%M') if obj.modify_dt else ''
    post['tags'] = [tag.name for tag in obj.tags.all()] if obj.modify_dt else ''
    post['owner'] = obj.owner.username if obj.modify_dt else 'Anonymous'

    # python object state id
    del post['_state']

    return post


def prev_next_post(obj):
    try:
        prevObj = obj.get_prev()
        prevDict = {'id': prevObj.id, 'title': prevObj.title}
    except obj.DoesNotExist as e:  # ObjectDosNotExsit
        prevDict = {}

    try:
        nextObj = obj.get_next()
        nextDict = {'id': nextObj.id, 'title': nextObj.title}
    except obj.DoesNotExist as e:  # ObjectDosNotExsit
        nextDict = {}

    return prevDict, nextDict

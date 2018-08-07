import httpRequestor from '../utils/http_requestor'

/**
 * 邀请网页填写手机号上传邀请人信息
 * @param { string } phonenum
 * @param { string } invitecode
 * @return {Promise}
 */
export const testPost = openid => {
    return httpRequestor.post('/testapi', { openid })
}

/**
 * 获取学员档案
 * @return {Promise}
 */
export const getStudentArchivesList = () => {
    return httpRequestor.get('/testapi')
}
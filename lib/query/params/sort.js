//TODO make dependend of variable names; and validateable

/** @const {String} */
const RELEVANCY = 'relevancy';
/** @const {Object} */
const SOCIAL = {
  FACEBOOK: {
    SHARES: 'social.facebook.shares',
    COMMENTS: 'social.facebook.comments',
    LIKES: 'social.facebook.likes'
  },
  GPLUS: { SHARES: 'social.gplus.shares' },
  PINTEREST: { SHARES: 'social.pinterest.shares' },
  LINKEDIN: { SHARES: 'social.linkedin.shares' },
  STUMLEDUPON: { SHARES: 'social.stumbledupon.shares' },
  VK:{ SHARES: 'social.vk.shares' }
}
/** @const {String} */
const REPLIES_COUNT = 'replies_count';
/** @const {String} */
const PARTICIPANTS_COUNT = 'participants_count';
/** @const {String} */
const SPAN_SCORE = 'spam_score';
/** @const {String} */
const PERFORMANCE_SCORE = 'performance_score';
/** @const {String} */
const PUBLISHED = 'published';
/** @const {Object} */
const THREAD = { PUBLISHED: 'thread.published' }
/** @const {String} */
const DOMAIN_RANK = 'domain_rank';
/** @const {String} */
const ORD_IN_THREAD = 'ord_in_thread';
/** @const {String} */
const RATING = 'rating';

module.exports = {
  RELEVANCY, SOCIAL, REPLIES_COUNT, PARTICIPANTS_COUNT, SPAN_SCORE,
  PERFORMANCE_SCORE, PUBLISHED, THREAD, DOMAIN_RANK, ORD_IN_THREAD, RATING
}
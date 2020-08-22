import communityOrgData from 'data/community_orgs.json';

export default (req, res) => {
  res.json(communityOrgData);
}

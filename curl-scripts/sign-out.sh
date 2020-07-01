curl "https://gentle-anchorage-68298.herokuapp.com/" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo

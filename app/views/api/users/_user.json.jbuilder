json.extract! user, :id, :email, :first_name, :last_name

if user.image
  json.photo_url url_for(user.image)
end
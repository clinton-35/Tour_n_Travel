class PackageSerializer < ActiveModel::Serializer
  attributes :id, :location, :description, :duration, :price, :rating, :image

  
end

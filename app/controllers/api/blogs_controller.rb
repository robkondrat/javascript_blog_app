class Api::BlogsController < ApplicationController
  def index
    @blogs = Blog.all
    render 'index.json.jb'
  end
end

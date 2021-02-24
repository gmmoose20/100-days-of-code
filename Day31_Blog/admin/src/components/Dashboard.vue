<template>
  <v-container fluid class="pa-3">
    <v-layout wrap>
      <v-flex xs12 md8 offset-md2>
        <h1 class="heading">Posts</h1>
      </v-flex>
      <v-flex xs12 md8 offset-md2>
        <v-list two-line class="transparent">
          <v-list-item v-for="(post,index) in posts.slice((page - 1) * displayAmount, displayAmount * page)" :key="post._id" class="grey darken-4 mb-1">
            <p class="cyan--text font-weight-bold mb-0">
              {{post.title}}
            </p>
            <v-spacer></v-spacer>
            <v-btn @click="updatePostDialog(post)" text color="success">Update</v-btn>
            <v-btn @click="$emit('removePost', index)" text color="error">Remove</v-btn>
          </v-list-item>
        </v-list>
      </v-flex>
      <v-flex xs12 md8 offset-md2>
        <v-pagination v-model="page" :length="Math.ceil(posts.length / displayAmount)" />
      </v-flex>
    </v-layout>

      <v-dialog v-model="updateDialog" persistent max-width="768">
        <v-card>
          <v-card-title class="grey darken-4 white--text headline">
            Update
          </v-card-title>
          <v-card-text>
            <v-container fluid grid-list-xl>
              <v-layout wrap>
                <v-flex xs12 md6>
                  <v-text-field label="Title" v-if="currentPost" v-model="currentPost.title" />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field label="Author" v-if="currentPost" v-model="currentPost.author" />
                </v-flex>
                <v-flex xs12>
                  <v-textarea label="Content" v-if="currentPost" v-model="currentPost.content" />
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions class="grey darken-4">
            <v-btn @click="updateDialog = !updateDialog" text color="grey">Close</v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="updatePost" text color="cyan">Update Post</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>>

  </v-container>

</template>

<script>
export default {
  name: 'Dashboard',
  props: ['posts'],
  data: () => ({
    updateDialog: false,
    currentPost: undefined,
    page: 1,
    displayAmount: 5.
    
  }),
  methods: {
    updatePostDialog (post) {
      this.currentPost = post;
      this.updateDialog = true;
    },
    updatePost() {
      this.$emit('updatePost', this.currentPost);
      this.updateDialog = false;
    }
  }
}
</script>
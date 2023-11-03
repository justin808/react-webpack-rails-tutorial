let reducer = (
  state: ReScriptShowTypes.state, 
  action: ReScriptShowTypes.action
): ReScriptShowTypes.state => {
  switch (action) {
  | SetComments(comments) => {comments, status: {...state.status, commentsFetchError: false}}
  | SetFetchError(error) => {...state, status: {...state.status, commentsFetchError: error}}
  | SetStoreError(error) => {...state, status: {...state.status, commentStoreError: error}}
  | SetSavingStatus(saving) => {...state, status: {...state.status, saving: saving}}
  }
}

@react.component
let default = () => {
  let (state, dispatch) = React.useReducer(
    reducer, {
      comments: ([]: Actions.Fetch.comments),
      status: {
        commentsFetchError: false,
        commentStoreError: false,
        saving: Free
      }
    }
  )

  let storeComment: ReScriptShowTypes.storeComment = (newComment: Actions.Create.t) => {
    SetStoreError(false)->dispatch 
    SetSavingStatus(BusySaving)->dispatch
    let saveAndFetchComments = async () => {
      try {
        let _ = await Actions.Create.storeComment(newComment)
        SetSavingStatus(Free)->dispatch

        let comments = await Actions.Fetch.fetchComments()
        switch comments {
        | Ok(comments) => SetComments(comments)->dispatch
        | Error(_) => SetFetchError(true)->dispatch
        }
      } catch {
        | _ => SetStoreError(true)->dispatch 
      }
    }
    saveAndFetchComments()->ignore
  }

  React.useEffect1((_) => {
    let fetchData = async () => {
      let comments = await Actions.Fetch.fetchComments()
      switch comments {
      | Ok(comments) => SetComments(comments)->dispatch
      | Error(_) => SetFetchError(true)->dispatch
      }
    }

    fetchData()->ignore
    None
  }, [])
 
  <div>
    <h2>{"Rescript + Rails Backend (with "->React.string}<a href="https://github.com/shakacode/react_on_rails">{"react_on_rails gem"->React.string}</a>{")"->React.string}</h2>
    <Header />
    <div className="prose max-w-none prose-a:text-sky-700 prose-li:my-0">
      <h2>{"Comments"->React.string}</h2>
      <ul>
        <li>{"Text supports Github Flavored Markdown."->React.string}</li>
        <li>{"Comments older than 24 hours are deleted."->React.string}</li>
        <li>{"Name is preserved. Text is reset, between submits"->React.string}</li>
        <li>{"To see Action Cable instantly update two browsers, open two browsers and submit a comment!"->React.string}</li>
      </ul>
      <CommentForm 
        storeComment=storeComment disabled={switch state.status.saving { | BusySaving => true; | Free => false}} storeCommentError={state.status.commentStoreError} />
      <CommentList comments={state.comments} fetchCommentsError={state.status.commentsFetchError} />
    </div>
  </div>
}

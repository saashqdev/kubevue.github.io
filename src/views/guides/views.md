# Pages and Routes

We call this type of component that can be guided by routing a page.

Page components only need to be referenced in the routing configuration, and do not need to be globally registered in Vue or referenced by other components. The parent page generally contains `<router-view>`, which is used to set the location of the child page.

### Directory Structure

All pages are in `src/views`, and the directory structure is consistent with the **route path**, recursively going down layer by layer:

- An `index.vue`, which represents the page corresponding to the current directory name;
- A `.vue` with another name, indicating a subpage of the current directory.

If this page is an entry page (a page that requires backend routing), add the backend template directly under the directory, because in some cases the front-end and back-end routing may need to be interchanged, so there is no need to change the directory structure.

Here is an example:

```
views/
├─ dashboard/
│ ├─ index.html # Add template directly
│ ├─ index.vue # Entry page. Corresponding route '/dashboard'
│   ├─ task/
│ │ ├─ index.vue # Task page. Corresponding route '/dashboard/task'
│ │ ├─ create.vue # Task creation page. Corresponding route '/dashboard/task/create'
│ │ ├─ edit.vue # Task editing page. Corresponding route '/dashboard/task/edit'
│   │   ├─ detail/                  #
│ │ │ ├─ index.vue # Task details page. Corresponding route '/dashboard/task/detail'
│ │ │ ├─ summary.vue # Task summary page. Corresponding route '/dashboard/task/detail/summary'
│ │ │ ├─ subtask.vue # Subtask page. Corresponding route '/dashboard/task/detail/subtask'
│   │   │   └─ ...
│   │   └─ ...
│   └─ ...
└─ ...
```

For some pages, such as the "subtask page" above, its view structure may not be under the `<router-view>` of `detail`, but we still need to put it under the `detail` directory according to the routing structure. Its view structure can be brought out through flexible routing configuration.

### Next Step

The next section is the [Component Library](/guides/library).
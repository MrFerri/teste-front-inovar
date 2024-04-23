import { Post } from "@/types/post.interface";
import { PriorityTypes } from "@/types/priority.interface";

export function mountPosts(
        list: Post[] | null,
        term: string,
        priority: PriorityTypes | string,
        page: number
      ) {
        let results: any = list;
        const PAGE_SIZE = 6;
        if (!page) page = 1;
        results = filterByText(results, term);
        orderBy(results, priority);
        return results.slice(0, PAGE_SIZE * page);
      }
      
      export function filterByText(list: Post[], term: string) {
        return list.filter((item: Post) => {
          const termLower = term.toLocaleLowerCase();
          return (
            item.title.toLocaleLowerCase().indexOf(termLower) !== -1 ||
            item.url.toLocaleLowerCase().indexOf(termLower) !== -1 ||
            item.author.toLocaleLowerCase().indexOf(termLower) !== -1 ||
            item.category.toLocaleLowerCase().indexOf(termLower) !== -1
          );
        });
      }
      export function orderBy(list: Post[], priority: PriorityTypes | string) {
        if (!priority) return list;
        if (priority === PriorityTypes.LIKES_ASC)
          return list.sort((a, b) =>
            parseInt(a.likes) > parseInt(b.likes) ? 1 : -1
          );
        if (priority === PriorityTypes.LIKES_DESC)
          return list.sort((a, b) =>
            parseInt(a.likes) < parseInt(b.likes) ? 1 : -1
          );
        if (priority === PriorityTypes.DATE_ASC)
          return list.sort((a, b) =>
            parseInt(a.created_at) > parseInt(b.created_at) ? 1 : -1
          );
        if (priority === PriorityTypes.DATE_DESC)
          return list.sort((a, b) =>
            parseInt(a.created_at) < parseInt(b.created_at) ? 1 : -1
          );
        if (priority === PriorityTypes.COMMENT_ASC)
          return list.sort((a, b) =>
            parseInt(a.comments) > parseInt(b.comments) ? 1 : -1
          );
        if (priority === PriorityTypes.COMMENT_DESC)
          return list.sort((a, b) =>
            parseInt(a.comments) < parseInt(b.comments) ? 1 : -1
          );
      }
      
import { addDays } from 'date-fns';
import { copy } from 'src/utils/copy';
import type { Project, Task, List } from 'src/models/projects_board';

let project: Project = {
  lists: [
    {
      id: '1',
      name: 'In review',
      color: '#FF1A43',
      taskIds: ['1', '2', '3', '4']
    },
    {
      id: '2',
      name: 'In progress',
      color: '#33C2FF',
      taskIds: ['5', '6', '7']
    },
    {
      id: '3',
      name: 'Completed',
      color: '#57CA22',
      taskIds: ['8', '9', '10']
    }
  ],
  tasks: [
    {
      id: '1',
      attachments: 4,
      progress: 0,
      sub_items: 3,
      comments: 1,
      description:
        'If several languages coalesce, the grammar of the resulting language',
      due_date: addDays(new Date(), 15).getTime(),
      listId: '1',
      memberIds: ['1', '2', '3'],
      name: 'Product design review'
    },
    {
      id: '2',
      attachments: 0,
      progress: 0,
      sub_items: 11,
      comments: 0,
      description:
        'Is more simple and regular than that of the individual languages',
      due_date: addDays(new Date(), 16).getTime(),
      listId: '1',
      memberIds: ['4', '5'],
      name: 'New features - React implementation'
    },
    {
      id: '3',
      attachments: 8,
      progress: 0,
      sub_items: 7,
      comments: 4,
      description:
        'The new common language will be more simple and regular than',
      due_date: addDays(new Date(), 12).getTime(),
      listId: '1',
      memberIds: ['3', '1'],
      name: 'Increase ROI master plan'
    },
    {
      id: '4',
      attachments: 5,
      progress: 0,
      sub_items: 17,
      comments: 6,
      description:
        'The existing European languages, it will be as simple as Occidental',
      due_date: addDays(new Date(), 11).getTime(),
      listId: '1',
      memberIds: ['1', '2', '3', '4'],
      name: 'Contact support with questions'
    },
    {
      id: '5',
      attachments: 4,
      progress: 35,
      sub_items: 14,
      comments: 0,
      description:
        'In fact, it will be Occidental to an English person, it will seem like',
      due_date: addDays(new Date(), 7).getTime(),
      listId: '2',
      memberIds: ['5', '1', '2'],
      name: 'Website launch list & todos'
    },
    {
      id: '6',
      attachments: 0,
      progress: 76,
      sub_items: 5,
      comments: 1,
      description:
        'Simplified English, as a skeptical Cambridge friend of mine told me',
      due_date: addDays(new Date(), 5).getTime(),
      listId: '2',
      memberIds: ['4', '3'],
      name: 'Write 5 new articles'
    },
    {
      id: '7',
      attachments: 4,
      progress: 44,
      sub_items: 3,
      comments: 17,
      description:
        'What Occidental is, the European languages are members of the same family',
      due_date: addDays(new Date(), 4).getTime(),
      listId: '2',
      memberIds: ['5', '2', '1'],
      name: 'Gather marketing materials'
    },
    {
      id: '8',
      attachments: 0,
      progress: 100,
      sub_items: 3,
      comments: 0,
      description:
        'Their separate existence is a myth for science, music, sport',
      due_date: addDays(new Date(), 7).getTime(),
      listId: '3',
      memberIds: ['3', '4'],
      name: 'Clean up maintenance branch'
    },
    {
      id: '9',
      attachments: 3,
      progress: 100,
      sub_items: 7,
      comments: 5,
      description:
        'Everyone realizes why a new common language would be desirable',
      due_date: addDays(new Date(), 2).getTime(),
      listId: '3',
      memberIds: ['1'],
      name: 'Prepare sales forecast for Q2/2021'
    },
    {
      id: '10',
      attachments: 8,
      progress: 100,
      sub_items: 4,
      comments: 1,
      description:
        'Uniform grammar, pronunciation and more common words more simple and regular',
      due_date: addDays(new Date(), 8).getTime(),
      listId: '3',
      memberIds: ['5', '1', '4'],
      name: 'Generate missing invoices'
    }
  ],
  members: [
    {
      id: '1',
      avatar: '/static/images/avatars/1.jpg',
      name: 'Maren Lipshutz'
    },
    {
      id: '2',
      avatar: '/static/images/avatars/2.jpg',
      name: 'Zain Vetrovs'
    },
    {
      id: '3',
      avatar: '/static/images/avatars/3.jpg',
      name: 'Hanna Siphron'
    },
    {
      id: '4',
      avatar: '/static/images/avatars/4.jpg',
      name: 'Cristofer Aminoff'
    },
    {
      id: '5',
      avatar: '/static/images/avatars/5.jpg',
      name: 'Maria Calzoni'
    }
  ]
};

class projectsBoard {
  getProject(): Promise<Project> {
    return Promise.resolve(copy(project));
  }

  updateList({ listId, update }): Promise<List> {
    return new Promise((resolve, reject) => {
      try {
        const clonedProject = copy(project);

        const list = clonedProject.lists.find((_list) => _list.id === listId);

        Object.assign(list, update);

        project = clonedProject;

        resolve(copy(list));
      } catch (err) {
        console.error(err);
        reject(new Error('Internal server error'));
      }
    });
  }

  updateTask({ taskId, update }): Promise<Task> {
    return new Promise((resolve, reject) => {
      try {
        const clonedProject = copy(project);

        const task = clonedProject.tasks.find((_task) => _task.id === taskId);

        if (!task) {
          reject(new Error('Task not found'));
          return;
        }

        Object.assign(task, update);

        project = clonedProject;

        resolve(copy(task));
      } catch (err) {
        console.error(err);
        reject(new Error('Internal server error'));
      }
    });
  }

  moveTask({ taskId, position, listId }): Promise<true> {
    return new Promise((resolve, reject) => {
      try {
        const clonedProject = copy(project);

        const task = clonedProject.tasks.find((_task) => _task.id === taskId);

        if (!task) {
          reject(new Error('Task not found'));
          return;
        }

        const sourceList = clonedProject.lists.find(
          (list) => list.id === task.listId
        );

        if (!sourceList) {
          reject(new Error('List not found'));
          return;
        }

        sourceList.taskIds = sourceList.taskIds.filter(
          (_taskId) => _taskId !== taskId
        );

        if (listId) {
          const destinationList = clonedProject.lists.find(
            (list) => list.id === listId
          );

          if (!destinationList) {
            reject(new Error('List not found'));
            return;
          }

          destinationList.taskIds.splice(position, 0, task.id);

          task.listId = destinationList.id;
        } else {
          sourceList.taskIds.splice(position, 0, task.id);
        }

        project = clonedProject;

        resolve(true);
      } catch (err) {
        console.error(err);
        reject(new Error('Internal server error'));
      }
    });
  }
}

export const projects_board = new projectsBoard();

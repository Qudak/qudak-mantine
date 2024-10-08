import { Frontmatter } from '@/types';

export const MDX_FORM_DATA: Record<string, Frontmatter> = {
  useForm: {
    title: 'use-form',
    package: '@qudak/form',
    slug: '/form/use-form',
    description: 'Manage form state',
    source: '@mantine/form/src',
    license: 'MIT',
    docs: 'form/use-form.mdx',
  },

  createFormContext: {
    title: 'Form context',
    package: '@qudak/form',
    slug: '/form/create-form-context',
    description: 'Add context support to use-form with createFormContext',
    docs: 'form/use-form.mdx',
  },

  formErrors: {
    title: 'Form errors',
    package: '@qudak/form',
    slug: '/form/errors',
    description: 'Manipulate form errors with use-form hook',
    docs: 'form/errors.mdx',
  },

  formNested: {
    title: 'Nested fields',
    package: '@qudak/form',
    slug: '/form/nested',
    description: 'Manage nested arrays and object state with use-form hook',
    docs: 'form/nested.mdx',
  },

  formRecipes: {
    title: 'Recipes',
    package: '@qudak/form',
    slug: '/form/recipes',
    description: 'use-form examples',
    docs: 'form/recipes.mdx',
  },

  formStatus: {
    title: 'Touched & dirty',
    package: '@qudak/form',
    slug: '/form/status',
    description: 'Get fields and form touched and dirty status',
    docs: 'form/status.mdx',
  },

  formValidation: {
    title: 'Form validation',
    package: '@qudak/form',
    slug: '/form/validation',
    description: 'Validate fields with use-form hook',
    docs: 'form/validation.mdx',
  },

  formSchemaValidation: {
    title: 'Form schema validation',
    package: '@qudak/form',
    slug: '/form/schema-validation',
    description: 'use-form schema based validation with zod, yup, joi and superstruct',
    docs: 'form/schema-validation.mdx',
  },

  formValidators: {
    title: 'Form validators',
    package: '@qudak/form',
    slug: '/form/validators',
    description: 'Premade validation functions',
    docs: 'form/validators.mdx',
  },

  formValues: {
    title: 'Form values',
    package: '@qudak/form',
    slug: '/form/values',
    description: 'Manipulate form values with use-form',
    docs: 'form/values.mdx',
  },

  formActions: {
    title: 'Form actions',
    package: '@qudak/form',
    slug: '/form/actions',
    description: 'Change form state from anywhere in the application',
    docs: 'form/actions.mdx',
  },

  formGetInputProps: {
    title: 'getInputProps',
    package: '@qudak/form',
    slug: '/form/get-input-props',
    description: 'A handler to get input props for any field in the form',
    docs: 'form/get-input-props.mdx',
  },

  formUncontrolled: {
    title: 'Uncontrolled mode',
    package: '@qudak/form',
    slug: '/form/uncontrolled',
    description: 'use-form uncontrolled mode to improve performance',
    docs: 'form/uncontrolled.mdx',
  },

  useField: {
    title: 'use-field',
    package: '@qudak/form',
    slug: '/form/use-field',
    description: 'use-field hook – manage single field state',
    docs: 'form/use-field.mdx',
  },
};
